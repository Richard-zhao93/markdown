import React from 'react';
import img from './img/lvsejiahao.png'

import './App.scss';

function App() {
  return (
      <div className="App">
        {/* 笔记本列表区域 */}
        <div className='noteLists'>
          <div className='newNote'>
            <div>
              {/* 
                1. 加载图片失败 
                  通过import导入图片src={img} 可以显示，但直接引用地址（src="./img/lvsejiahao.png"）加载失败
                2. 字体图标的className为什么一定要加上 iconfont，才能显示出来
              */}
              <img src={img} />
            </div>
            <div>新建笔记</div>
          </div>

          <div className='noteList'>
            <div>
              <span>
                <i className='iconfont icon-tushuguan'></i>
              </span>
              <span>笔记本</span>
            </div>
            <ul>
              <li className='active'>
                <span>
                  <i className='iconfont icon-biji'></i>
                </span>
                <span>笔记本1</span>
              </li>
              <li>
                <span>
                  <i className='iconfont icon-biji'></i>
                </span>
                <span>笔记本2</span>
              </li>
              <li>
                <span>
                  <i className='iconfont icon-biji'></i>
                </span>
                <span>笔记本3</span>
              </li>
              <li>
                <span>
                  <i className='iconfont icon-biji'></i>
                </span>
                <span>笔记本4</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 笔记本预览区域 */}
        <div className='notePreview'>
          <div className='preview-title'>读书笔记</div>
          <div className='preview-list'>
            <ul>
              <li>
                <div className='preview-box'>
                  <div>
                    <h2>实战印象笔记</h2>
                    <div>实战印象笔记实战印象笔记实战印象笔记实战印象笔记实战印象笔记实战印象笔记</div>
                  </div>
                </div>
                <div className='preview-msg'>
                  <span>昨天 17:40</span>
                  <span><i className='iconfont icon-lajitong'></i></span>
                </div>
              </li>
              <li>
                <div className='preview-box'>
                  <div>
                    <h2>实战印象笔记</h2>
                    <div>实战印象笔记实战印象笔记实战印象笔记实战印象笔记实战印象笔记实战印象笔记</div>
                  </div>
                </div>
                <div className='preview-msg'>
                  <span>昨天 17:40</span>
                  <span><i className='iconfont icon-lajitong'></i></span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 笔记本编辑区域 */}
        <div className='noteEditor'>

          <div className='notebookTitle'>
            <div>
              <span><i className='iconfont icon-tubiao-'></i></span>
              <span>默认笔记本</span>
            </div>
          </div>

          <div className='noteTitle'>
            <div>
              <span>实战印象笔记</span>
            </div>
          </div>

          <div className="markdown">
            <div className="body box">
                <div className="editor">
                    <textarea className="textarea">
                    </textarea>
                </div>
                <div className="preview"></div>
            </div>
          </div>

        </div>
      </div>
  );
}

export default App;