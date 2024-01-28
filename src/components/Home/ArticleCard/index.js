import { HeartOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, ConfigProvider, Space, Tag } from "antd";
import { useState } from "react";
const { Meta } = Card;

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  return <p className="text">{isReadMore ? text.slice(0, 200) : text}</p>;
};

function ArticleCard(props) {
  const tagList = props.tagList.map((tag) => {
    return (
      <Tag>
        <a href="/">{tag}</a>
      </Tag>
    );
  });
  return (
    <div className="article-card">
      <Card>
        <Meta
          avatar={
            <Avatar src="https://api.realworld.io/images/demo-avatar.png" />
          }
          title={
            <div
              style={{ color: "#5CB85C", position: "relative", top: "-4px" }}
            >
              {props.author.username}
            </div>
          }
          description={
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="description"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  top: "-20px",
                }}
                className="createAt"
              >
                {props.createdAt}
              </div>
              <div
                className="button"
                style={{ position: "relative", top: "-30px" }}
              >
                <Button icon={<HeartOutlined />}>
                  {" "}
                  {props.favoritesCount}
                </Button>
              </div>
            </div>
          }
        />

        <div className="article">
          <div style={{ fontWeight: "600", fontSize: "1.5rem" }}>
            <ReadMore>{props.title}</ReadMore>
          </div>
          <div style={{ fontWeight: "300", color: "#999", fontSize: "1rem" }}>
            <ReadMore>{props.description}</ReadMore>
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="article-footer"
        >
          <a
            href="/"
            style={{
              fontSize: "0.8rem",
              fontWeight: "300",
              color: "#bbb",
            }}
          >
            Read more...
          </a>

          <ConfigProvider
            theme={{
              components: {
                Tag: {
                  defaultBg: "#none",
                  defaultColor: "#aaa",
                  borderRadiusSM: "10px",
                },
              },
            }}
          >
            <Space size={[0, tagList.length - 1]} wrap>
              {tagList}
              <Tag>
                <a href>hello</a>
              </Tag>
            </Space>
          </ConfigProvider>
        </div>
      </Card>
    </div>
  );
}

export default ArticleCard;
