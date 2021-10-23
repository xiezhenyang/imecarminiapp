import React, { useCallback, useEffect, memo } from 'react'
import { AtIcon } from 'taro-ui';
import './menulist.less'

function MenuList(props) {
  const { menuList } = props;

  useEffect(() => {
  })

  let newList = [];

  menuList.forEach((item) => {
    let {label, imgName, onClick} = item;
    let memoizedOnClick = useCallback(onClick, []); //永不更新
    newList.push({label, imgName, onClick: memoizedOnClick});
  })

  return (
      <ul className="menulist">
        {
          newList.map((item, index) => {
            return <ListItem {...item} key={index}/>
          })
        }
      </ul>
  );
}

const ListItem = memo(({label, imgName, onClick}) => {
  return(
    <li>
      <a href="#" onClick={onClick}>
        <div className="item-content">
          <AtIcon value={imgName} size="36" color="#a6f4f5" className="icon"></AtIcon>
          <span>{label}</span>
        </div>
      </a>
    </li>
  );
})

export default MenuList;