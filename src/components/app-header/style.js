import { styled } from "styled-components"

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #242221;
  /* margin: 0 auto; */
  display: flex;
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .header-group {
    display: flex;
    color: #ccc;
    font-size: 14px;

    .header-item {
      position: relative;
      padding: 0 19px;
      height: 70px;
      text-align: center;
      line-height: 70px;

      &:hover {
        text-decoration: none;
        background-color: #000;
      }
      /* hot图标 */
      :last-of-type {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -192px 0;
          top: 20px;
          right: -20px;
        }
      }
    }
    .link-active {
      color: #fff;
      background-color: #000;
      /* 下面的小三角 */
      .icon {
        position: absolute;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-image: url('${require('@/assets/img/sprite_01.png')}');
        background-position: 254px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10%;

  .search-input {
    border-radius: 40px;
    height: 36px;
  }
  .transparent-btn {
    border-radius: 40px;
    background: transparent;
    color: #fff;
  }
  .login-btn {
    color: #ccc;
  }
`