require('normalize.css/normalize.css');
require('styles/App.scss');
require('../data/imagedata.json');

import React from 'react';

//获取图片相关的数据
let imageDatas = require('../data/imagedata.json');

//利用自执行函数将图片名信息转换成URL地址
((imageDatasArr) => {
  imageDatas = imageDatasArr.map((imageItem) => {
    imageItem.imageURL = '../images/' + imageItem.fileName;
    return imageItem;
  })
})(imageDatas);
 

class ImgFigure extends React.Component {
 
  render() {
    // debugger
    let that = this;
    
    return (
      <figure className="image-figure">
        <img src={this.props.data.imageURL}
             alt={this.props.data.title}
             className="img"
        />
        <figcaption>
          <h2>
            {this.props.data.title}
          </h2>
        </figcaption>
      </figure>
    )
  }
}

class GalleryByReactApp extends React.Component {
  render() {
    let controllerUnits = [],//父组件将数据写在子组件组件名上，子组件通过this.props.xxx获取父组件的数据。
        imgFigures = [];
    imageDatas.forEach((value, index)=> {
      imgFigures.push(<ImgFigure key={index} data={value}/>);
    });


    return (
      <section className="stage"> 
        <section className="image-sec">
          {imgFigures}
        </section>
         <nav className="controller-nav">
          {controllerUnits}
         </nav>
      </section>
    );
  }
}


export default GalleryByReactApp;
