# tingle-notification
此项目基于 React 0.14.3 ，使用前请注意版本兼容性。

## 用例
（演示数据，仅供参考）
```jsx
const Notice = require('tingle-notification');

<Notice onClick={handler}>
最新公告，点击查看 <Notice.LinkButton/>
</Notice>


<Notice ref="successNotice" onClick={this.refs.successNotice.hide()}>
注册成功，欢迎使用 <Notice.CloseButton/>
</Notice>

```

## API接口

#### .hide()
描述：隐藏此组件

类型：Function

#### .show()
描述：显示此组件

类型：Function

## 内置了两个常用的按钮样式
使用前注意`Tingle-Icon`的SVG引用方案

#### .LinkButton
![b0cbcd7a6b4510309cb47dbd68366ced](https://cloud.githubusercontent.com/assets/1736244/12046603/eccfb326-aef6-11e5-8fa5-457d5ea4cded.png)

带有链接样式的内置按钮


#### .CloseButton
![a511bbf60622dba621a9669560ecb9a5](https://cloud.githubusercontent.com/assets/1736244/12046606/f3871d12-aef6-11e5-8e7e-ffc0e4709c15.png)

带有关闭样式的内置按钮


## Links

- [Issues](http://github.com/tinglejs/tingle-notification/issues)

