import React from "react";
import { ConfigProvider, Pagination, Tabs } from "antd";
import ArticleCard from "./ArticleCard";
import ArticleCardList from "./ArtcleCardList";
const onChange = (key) => {
  console.log(key);
};

function Main() {
  const [current, setCurrent] = React.useState(1);

  const items = [
    {
      key: "1",
      label: "Global Feed",
      children: <ArticleCardList currentPage={current} />,
    },
  ];

  const handleOnChange = (num) => {
    setCurrent(num);
  };
  return (
    <div style={{ padding: "0 15px" }} className="main">
      {/*----------------Tab------------------- */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5CB85C",
          },
        }}
      >
        <Tabs ink defaultActiveKey="1" items={items} onChange={onChange} />
      </ConfigProvider>
      {/*----------------Pagination------------------- */}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5CB85C",
            colorPrimaryBorder: "#5CB85C",
          },
        }}
      >
        <Pagination
          current={current}
          total={197}
          onChange={handleOnChange}
          size
        />
      </ConfigProvider>
    </div>
  );
}

export default Main;
