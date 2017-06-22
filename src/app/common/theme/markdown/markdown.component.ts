import {
  AfterViewInit,
  ViewChild,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap';

import * as marked from "marked";
import * as hljs from 'highlight.js';
import * as CodeMirror from 'codemirror';
import * as store from 'store.js';
(<any>window).hljs = hljs;
(<any>window).store = store;
(<any>window).marked = marked;
(<any>window).CodeMirror = CodeMirror;

import 'codemirror/mode/meta.js';
import 'codemirror/mode/go/go.js';
import 'codemirror/mode/gfm/gfm.js';
import 'codemirror/mode/vue/vue.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/lua/lua.js';
import 'codemirror/mode/php/php.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/jsx/jsx.js';
import 'codemirror/mode/sql/sql.js';
import 'codemirror/mode/pug/pug.js';
import 'codemirror/mode/lua/lua.js';
import 'codemirror/mode/sass/sass.js';
import 'codemirror/mode/http/http.js';
import 'codemirror/mode/perl/perl.js';
import 'codemirror/mode/ruby/ruby.js';
import 'codemirror/mode/nginx/nginx.js';
import 'codemirror/mode/shell/shell.js';
import 'codemirror/mode/clike/clike.js';
import 'codemirror/mode/stylus/stylus.js';
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/haskell/haskell.js';
import 'codemirror/mode/markdown/markdown.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/javascript/javascript.js';

import 'codemirror/addon/mode/overlay.js';
import 'codemirror/addon/edit/closetag.js'
import 'codemirror/addon/edit/continuelist.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/selection/mark-selection.js';
// import 'codemirror/addon/search/searchcursor.js';
// import 'codemirror/addon/search/matchesonscrollbar.js'；
// import 'codemirror/addon/search/searchcursor.js';
// import 'codemirror/addon/search/match-highlighter.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/xml-fold.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';


@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: [
    './markdown.component.scss'
  ],
  providers: [{
   provide: NG_VALUE_ACCESSOR,
   useExisting: forwardRef(() => MarkdownComponent),
   multi: true
 }],
 encapsulation: ViewEncapsulation.None
})

export class MarkdownComponent implements AfterViewInit, ControlValueAccessor {

  @ViewChild('bakModal') bakModal: ModalDirective;

  // 基本数据
  editor:any;
  content:any = '';
  markedHtml:any = '';
  editorElem:HTMLElement;

  previewMode:number = 0;
  fullscreen:any = false;

  // 传入配置
  @Input() config: Object;

  // 派发事件
  @Output() ready: EventEmitter<any> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  // ...
  onModelChange: Function = () => {};
  onModelTouched: Function = () => {};

  public timer = null;

  // 注入Dom
  constructor(private elementRef: ElementRef) {}

  // 使用本地草稿
  useArticleBak() {
    this.content = store.get(location.pathname);
    this.editor.setValue(this.content);
    this.markedHtml = marked(this.content);
    this.bakModal.hide();
  }

  // 关闭草稿弹窗
  cancelBakModal() {
    this.editor.setValue(this.content);
    this.markedHtml = marked(this.content);
    this.bakModal.hide();
  }

  // 视图加载完成后执行初始化
  ngAfterViewInit() {
    if(this.editor) return false;
    this.editorElem = this.elementRef.nativeElement.children[0].children[1].children[0].children[0];
    this.editor = CodeMirror.fromTextArea(this.editorElem, Object.assign({
      // 语言模式 github markdown扩展
      mode: 'gfm',
      // 行号
      lineNumbers: true,
      // 自动验证错误
      matchBrackets: true,
      // 是否换行
      lineWrapping: false,
      // 点击高亮正行
      styleActiveLine: true,
      // 配色
      theme: 'base16-dark',
      // 自动补全括号
      autoCloseBrackets: true,
      // 自动闭合标签
      autoCloseTags: true,
      // 自动高亮所有选中单词
      // styleSelectedText: true,
      // highlightSelectionMatches: { showToken: /w/, annotateScrollbar: true },
      // 展开折叠
      foldGutter: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      // 回车键自动补全上一步格式
      extraKeys: {
        "Enter": "newlineAndIndentContinueMarkdownList"
      }
    }, this.config));
    this.editor.on('blur', cm => {
      this.onModelTouched();
    });
    this.editor.on('change', cm => {
      const content = cm.getValue();
      if(!Object.is(content, this.content)) {
        this.content = content;
        this.change.emit({
          editor: this.editor,
          content: this.content
        });
        this.onModelChange(this.content);
        if(this.previewMode != 0) {
          this.parseMarked();
        }
      }
      // 自动保存草稿
      if (!!this.timer) clearTimeout(this.timer);
      if(!Object.is(content, store.get(location.pathname))) {
        this.timer = setTimeout(() => {
          store.set(location.pathname, content)
        }, 1600);
      };
    });
    // 如果是发布页面，有本地存储，则直接读取存储
    // if(Object.is('/article/post', location.pathname) || Object.is('/announcement', location.pathname)) {
    //   let bak = store.get(location.pathname);
    //   if(!!bak) {
    //     this.content = bak;
    //     this.editor.setValue(this.content);
    //     this.markedHtml = marked(this.content);
    //   }
    // } else {
    // // 如果是编辑页面，没有弹窗，则设置
    //   setTimeout(() => {
    //     if(!this.bakModal.isShown) {
    //       this.editor.setValue(this.content);
    //       this.markedHtml = marked(this.content);
    //     }
    //   }, 1000)
    // }

    /*
    const dropZone = this.elementRef.nativeElement.children[0].children[1];
    dropZone.addEventListener('drop', event => {
      event.preventDefault();
      event.stopPropagation();
      let reader = new FileReader();
      reader.onload = e => {
        console.log(e);
        // this.editor.setValue(e.target.result);
      };
      reader.readAsText(event.dataTransfer.files[0]);
    }, false);
    */
  }

  // 解析markeddown
  parseMarked() {
    this.markedHtml = marked(this.content);
  }

  // 写数据
  writeValue(currentValue: any) {
    const bak = store.get(location.pathname);
    if (!Object.is(currentValue, undefined) && !Object.is(currentValue, this.content)) {
      // 如果是公告页就啥也不干
      if(Object.is(location.pathname, '/announcement')) {
        this.content = currentValue;
        this.editor.setValue(this.content);
        return false;
      }
      if (!!bak && !Object.is(currentValue, bak)) {
        this.bakModal.show();
      }
      this.content = currentValue;
    } else if (!!bak) {
      this.content = bak;
    }
  }

  // 保存文件
  saveFile(code, name) {
    const blob = new Blob([code], { type: 'text/plain' });
    if ((<any>window).saveAs) {
      (<any>window).saveAs(blob, name);
    } else if ((<any>navigator).saveBlob){
      (<any>navigator).saveBlob(blob, name);
    } else {
      const url = URL.createObjectURL(blob);
      let link = document.createElement("a");
      link.setAttribute("href",url);
      link.setAttribute("download",name);
      let event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, true, (<any>window), 1, 0, 0, 0, 0, false, false, false, false, 0, null);
      link.dispatchEvent(event);
    }
  }

  // 保存为markdown
  saveAsMarkdown(){
    this.saveFile(this.content, "untitled.md");
  }

  // 按键listen
  keyDownListen(event) {

    // 退出全屏
    if(Object.is(event.keyCode, 27)) {
      this.fullscreen = false;
    }

    // 全屏
    if(Object.is(event.keyCode, 122)) {
      this.fullscreen = !this.fullscreen;
    }

    // 保存
    if(event.keyCode == 83 && (event.ctrlKey || event.metaKey || event.shiftKey)){
      this.saveAsMarkdown();
      event.preventDefault();
      return false;
    }
  }

  // 插入内容
  updateCodeMirror(data) {
    const codemirror = this.editor;
    codemirror.replaceSelection(data);
    const startPoint = codemirror.getCursor('start');
    const endPoint = codemirror.getCursor('end');
    codemirror.setSelection(startPoint, endPoint);
    codemirror.focus();
    /*
    let doc = codemirror.getDoc();
    let cursor = doc.getCursor(); // gets the line number in the cursor position
    let line = doc.getLine(cursor.line); // get the line contents
    let pos = { // create a new object to avoid mutation of the original selection
      line: cursor.line,
      ch: line.length - 1 // set the character position to the end of the line
    }
    doc.replaceRange('\n' + data + '\n', pos); // adds a new line
    */
  }

  // 替换光标选中项内容
  replaceSelection(cm, active, start, end) {
    let text;
    let startPoint = cm.getCursor('start');
    let endPoint = cm.getCursor('end');
    if (active) {
      text = cm.getLine(startPoint.line);
      start = text.slice(0, startPoint.ch);
      end = text.slice(startPoint.ch);
      cm.setLine(startPoint.line, start + end);
    } else {
      text = cm.getSelection();
      cm.replaceSelection(start + text + end);
      startPoint.ch += start.length;
      endPoint.ch += start.length;
    }
    cm.setSelection(startPoint, endPoint);
    cm.focus();
  }

  // 分析编辑器当前的光标位置
  getState(cm, pos) {
    pos = pos || cm.getCursor('start');
    let stat = cm.getTokenAt(pos);
    if (!stat.type || !stat.type.split) return {};
    let types = stat.type.split(' ');
    let ret = {}, data, text;
    for (let i = 0; i < types.length; i++) {
      data = types[i];
      if (data === 'strong') {
        (<any>ret).bold = true;
      } else if (data === 'letiable-2') {
        text = cm.getLine(pos.line);
        if (/^\s*\d+\.\s/.test(text)) {
          ret['ordered-list'] = true;
        } else {
          ret['unordered-list'] = true;
        }
      } else if (data === 'atom') {
        (<any>ret).quote = true;
      } else if (data === 'em') {
        (<any>ret).italic = true;
      }
    }
    return ret;
  }

  // 粗体
  toggleBold() {
    const codemirror = this.editor;
    const stat = this.getState(codemirror, codemirror.getCursor());

    let text;
    let start = '**';
    let end = '**';

    let startPoint = codemirror.getCursor('start');
    let endPoint = codemirror.getCursor('end');
    if ((<any>stat).bold) {
      /*
      text = codemirror.getLine(startPoint.line);
      start = text.slice(0, startPoint.ch);
      end = text.slice(startPoint.ch);

      start = start.replace(/^(.*)?(\*|\_){2}(\S+.*)?$/, '$1$3');
      end = end.replace(/^(.*\S+)?(\*|\_){2}(\s+.*)?$/, '$1$3');
      startPoint.ch -= 2;
      endPoint.ch -= 2;
      // console.log('text', text, 'start', start, 'end', end, startPoint, endPoint);
      // codemirror.setLine(startPoint.line, start + end);
      // codemirror.replaceRange(end, endPoint);
      */
    } else {
      text = codemirror.getSelection();
      codemirror.replaceSelection(start + text + end);

      startPoint.ch += 2;
      endPoint.ch += 2;
    }
    codemirror.setSelection(startPoint, endPoint);
    codemirror.focus();
  }

  // 斜体
  toggleItalic() {
    const codemirror = this.editor;
    const stat = this.getState(codemirror, codemirror.getCursor());

    let text;
    let start = '*';
    let end = '*';

    let startPoint = codemirror.getCursor('start');
    let endPoint = codemirror.getCursor('end');
    if ((<any>stat).italic) {
      /*
      text = codemirror.getLine(startPoint.line);
      start = text.slice(0, startPoint.ch);
      end = text.slice(startPoint.ch);

      start = start.replace(/^(.*)?(\*|\_)(\S+.*)?$/, '$1$3');
      end = end.replace(/^(.*\S+)?(\*|\_)(\s+.*)?$/, '$1$3');
      startPoint.ch -= 1;
      endPoint.ch -= 1;
      // codemirror.setLine(startPoint.line, start + end);
      */
    } else {
      text = codemirror.getSelection();
      codemirror.replaceSelection(start + text + end);

      startPoint.ch += 1;
      endPoint.ch += 1;
    }
    codemirror.setSelection(startPoint, endPoint);
    codemirror.focus();
  }

  // 插入链接
  drawLink() {
    const codemirror = this.editor;
    const position = codemirror.getCursor();
    const stat = this.getState(codemirror, position);
    this.replaceSelection(codemirror, (<any>stat).link, '[', '](https://)');
  }

  // 插入图片
  drawImage() {
    const codemirror = this.editor;
    const position = codemirror.getCursor();
    const stat = this.getState(codemirror, position);
    this.replaceSelection(codemirror, (<any>stat).image, '![](', ')');
  }

  // 插入引用
  drawQuote() {
    const codemirror = this.editor;
    const position = codemirror.getCursor();
    const stat = this.getState(codemirror, position);
    this.replaceSelection(codemirror, (<any>stat).quote, '> ', '\n');
  }

  // 插入代码
  drawCode() {
    const codemirror = this.editor;
    const position = codemirror.getCursor();
    const stat = this.getState(codemirror, position);
    this.replaceSelection(codemirror, (<any>stat).code, '```\n', '\n```');
  }

  // 插入h3标题
  drawH3Title(data) {
    const codemirror = this.editor;
    const position = codemirror.getCursor();
    const stat = this.getState(codemirror, position);
    this.replaceSelection(codemirror, (<any>stat).h3, '### ', '\n');
    // this.updateCodeMirror(data);
  }

  // 撤销
  undo() {
    const codemirror = this.editor;
    codemirror.undo();
    codemirror.focus();
  }

  // 回退
  redo() {
    const codemirror = this.editor;
    codemirror.redo();
    codemirror.focus();
  }

  // 注册事件
  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  // 注册事件
  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }
}
