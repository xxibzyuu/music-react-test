import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style";
import { headerLinks } from "@/common/local-data";
import { Input, Icon, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default memo(function JMAppHeader(props) {
  // const 

  const menuItem = (item, index) => {
    return (
      <NavLink
        key={item.title}
        to={item.link}
        className="header-item"
        activeClassName="link-active"
      >
        {item.title}
      </NavLink>
    )
  }

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h1>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
        </h1>
        <div className="header-group">
          {headerLinks.map((item, index) => {
            return menuItem(item, index)
          })}
        </div>
      </HeaderLeft>
      <HeaderRight>
        <Input className="search-input"  placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}></Input>
        <Button className="transparent-btn">创作者中心</Button>
        <Button type="link" className="login-btn">登录</Button>
      </HeaderRight>
    </HeaderWrapper>
  )
})