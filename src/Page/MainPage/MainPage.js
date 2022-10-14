import React from 'react';
import 'antd/dist/antd.min.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);

  

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    className: 'border-solid border-2 border-sky-500 m-2 ',
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

export default function MainPage(){
  return(
    <div className="h-screen bg-gray-600">
      <div id="header" className="h-16 bg-gray-400">
        a
      </div>
      <div id="body" className='h-fit w-3/4 flex-row ml-auto mr-auto rounded-2xl bg-white sm:flex flex-nowrap sm:h-4/5'>
        <aside className="h-fit rounded-2xl w-full sm:w-60 sm:h-full">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
              borderRadius: '16px',
              backgroundColor: 'yellow'
            }}
            items={items2}
          />
        </aside>
        <section className="h-full bg-gray-200 rounded-2xl p-2 w-full sm:w-full sm:ml-7">
          asd
        </section>
      </div>
    </div>
  )
};