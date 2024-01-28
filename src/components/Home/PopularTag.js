import React, { useEffect, useState } from "react";
import { ConfigProvider, Space, Tag } from "antd";
import { Card } from "antd";
import axios from "axios";

const PopularTag = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = "https://api.realworld.io/api/tags";

    // Make an Axios GET request
    axios
      .get(apiUrl)
      .then((response) => {
        setTags(response.data.tags);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <div className="tag">
      <Card
        title={'Popular Tags'}
        bordered={true}
        headStyle={{
          fontFamily: "'Source Sans Pro', sans-serif",
          fontSize: "1rem",
          fontWeight: "lighter",
          color: "#373a3c",
          backgroundColor: "#fff",
          background: "#f3f3f3",
        }}
        bodyStyle={{ background: "#f3f3f3" }}
      >
        <ConfigProvider
          theme={{
            components: {
              Tag: {
                defaultBg: "#818a91",
                defaultColor: "#fff",
                borderRadiusSM: "10px",
              },
            },
          }}
        >
         
            {tags.map((tag)=>(<Tag className="tag-item-1"><a href="">{tag}</a></Tag>))}
          
        </ConfigProvider>
      </Card>
    </div>
  );
};

export default PopularTag;
