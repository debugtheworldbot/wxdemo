import React, {useState} from "react";

export default function App() {
    const [tag,setTag]=useState([])
  const Button={
      button: [
          {
              name: "扫码",
              sub_button: [
                  {
                      type: "scancode_waitmsg",
                      name: "扫码带提示",
                      key: "rselfmenu_0_0",
                      sub_button: [ ]
                  },
                  {
                      type: "scancode_push",
                      name: "扫码推事件",
                      key: "rselfmenu_0_1",
                      sub_button: [ ]
                  }
              ]
          },
          {
              name: "发图",
              sub_button: [
                  {
                      type: "pic_sysphoto",
                      name: "系统拍照发图",
                      key: "rselfmenu_1_0",
                      sub_button: [ ]
                  },
                  {
                      type: "pic_photo_or_album",
                      name: "拍照或者相册发图",
                      key: "rselfmenu_1_1",
                      sub_button: [ ]
                  },
                  {
                      type: "pic_weixin",
                      name: "微信相册发图",
                      key: "rselfmenu_1_2",
                      sub_button: []
                  }
              ]
          },
          {name:'帮助'}

      ],
  }
  function show(title) {
        // 获取二级菜单名
      const detail=Button.button.filter(item=>item.name===title)[0].sub_button
      if(detail){
          console.log(detail)
          const data=detail.map(item=>item.name)
          setTag(data)
      }else {

      }
  }
    const title=Button.button.map(item=><li onClick={()=>show(item.name)}>{item.name}</li>)

    return (
        <div className="App">
           <ul>{title}</ul>
            {tag}
        </div>
    );
}
