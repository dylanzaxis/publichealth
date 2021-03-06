import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Divider, Tag, Input } from "antd";
import Hero from "./carousel";
import { FA } from "../../../utils/images";
import { Card, Avatar } from "antd";
import { connect } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { read } from "../../../redux/actions/master";
import { MakeList } from "../../../utils/list";
import moment from "moment";
import "react-image-gallery/styles/scss/image-gallery.scss";
import RightSide from "./rightSide";

function NewsFlash() {
  return <div>news flash </div>;
}



function Title(props) {
  const { title, title_blue, link_to, handleClick, section, hide_see_more } =
    props;

  let full_title = (
    <div>
      {title} <span className="header_blue">{title_blue}</span>
    </div>
  );

  const onClick = () => {
    handleClick && handleClick(section);
  };

  return (
    <Row>
      <Col className="item_title" span={24}>
        <Divider orientationMargin={0} orientation="left">
          {full_title}
        </Divider>
      </Col>
      <Col span={24}>{props.children}</Col>
      {!hide_see_more && (
        <Col onClick={onClick} span={24}>
          <a href={link_to}>
            <div className="load_more">See More</div>
          </a>
        </Col>
      )}
    </Row>
  );
}

export const StoryBody = (props) => {
  const { link_to, data = [], handleClick } = props;
  const [container, setContainer] = useState({});
  const ref = useRef({});
  const initialSetup = async () => {
    setTimeout(() => {
      let cont = ref.current;
      console.log(ref);
      setContainer(cont);
    }, 4);
  };
  useEffect(() => {
    initialSetup();
  }, []);
  return (
    <Title handleClick={handleClick} link_to={link_to} {...props}>
      <Row gutter={36}>
        {data.map((item, index) => {
          let default_span = {
            container: {
              xs: 24,
              sm: 24,
              md: index > 1 ? 12 : 24,
              lg: index > 1 ? 12 : 24,
              xl: index > 1 ? 8 : 12,
              xxl: index > 1 ? 8 : 12,
            },
            image: 24,
          };
          var video_id = "";

          if(item.video !== undefined && item.video.includes("youtube")){
            video_id = item.video.split('v=')[1];
            var ampersandPosition = video_id.indexOf('&');
            if(ampersandPosition != -1) {
              video_id = video_id.substring(0, ampersandPosition);
            }
          }
          


          let span = item.span || default_span;
          let author = item.author;
          if (!author) {
            let domain = item.link;
            if (domain) {
              domain = domain.split(".");
              author = domain[0] + ".";
              author = author.split("//");
              author = author[1];
              let prefix = (domain[1] && domain[1].split("/")) || [];
              author += prefix[0];
            }
          }

          let gotDate = item.published_on;
          let date = moment(gotDate).format("MMMM Do YYYY");
          let width = ref.current[index] && ref.current[index].clientWidth;

          let height = width * 0.5;

          if (isNaN(height)) {
            height = 150;
            console.log(container, "getting_height");
          }

          let categories = [];
          item.categories &&
            item.categories.forEach((category, key) => {
              let output = category.split("_").join(" ");
              categories.push(
                <Tag color={"blue"} key={key}>
                  {output}
                </Tag>
              );
            });
          console.log(item.link.includes("youtube") ?? 'Working Video: '+item.video);
          console.log(item, "testing_item_categories");
          return (
            <Col key={index} {...span.container} className="article_container">
              <a target={"_blank"} href={item.link} without rel="noreferrer">
                <Row>
                  <>
                  {item.video !== undefined && item.video.includes("youtube") ? <iframe ref={(element) => (ref.current[index] = element)} class="article_image_container"
      width="100%"
      style={{height:height}}
      src={`https://www.youtube.com/embed/${video_id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    /> : <Col
                  ref={(element) => (ref.current[index] = element)}
                  style={{
                    backgroundImage: `url("${
                      item.image || item.screenshot
                    }")`,
                    height,
                  }}
                  span={span.image}
                  className="article_image_container"
                >
                <Row>
                <Col className="story_tags_container">{categories}</Col>
              </Row>
            </Col>}
                  </>
                  <Col span={span.title} className="article_info_container">
                    <p className="article_title"> {item.title}</p>
                    <div className="article_credit_container">
                      <span> by {author} </span>
                      <FA icon="far fa-clock" title={date} />
                    </div>
                  </Col>
                </Row>
              </a>
            </Col>
          );
        })}
      </Row>
    </Title>
  );
};

const HomePage = (props) => {
  const handleClick = async (section) => {
    console.log(section, "getting_clicks_here");

    await props.read({
      key: "news",
      dispatch_key: "recent_news",
      query: `?category=${section}&&type=1&&limit=100000`,
      replace: true,
    });
  };

  console.log(props, "testing_props_here");
  let span = {
    left: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 16,
      xl: 16,
      xxl: 16,
    },
    right: {
      xs: 24,
      sm: 24,
      md: 24,
      lg: 8,
      xl: 8,
      xxl: 8,
    },
  };

  return (
    <Row gutter={24}>
      <Col {...span.left}>
        {/* <NewsFlash /> */}
        {/* <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
        /> */}
        <StoryBody
          data={props.top_stories}
          assigned="react dev 2 9pm"
          title="Top "
          title_blue="Stories"
          link_to={"/news/top_stories"}
          handleClick={handleClick}
          section="top_stories"
        />
        <StoryBody
          data={props.must_read}
          assigned="react dev 1 9pm"
          title="Must "
          title_blue=" Read"
          link_to={"/news/must_read"}
          handleClick={handleClick}
          section="must_read"
        />
        <StoryBody
          data={props.updated_daily}
          assigned="react dev 1 9pm"
          title="News "
          title_blue=" Updated Daily"
          link_to={"/news/updated_daily"}
          handleClick={handleClick}
          section="updated_daily"
        />
        {/* <StoryBody
          data={props.updated_daily}
          assigned="react dev 3 9pm"
          title="News - "
          title_blue="Updated Daily"
          link_to={"/news/updated_daily"}
          handleClick={handleClick}
          section="updated_daily"
        /> */}
      </Col>
      <Col {...span.right}>
        <RightSide {...props} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  exclusive_stories: state.master.exclusive_stories || [],
  must_read: state.master.must_read || [],
  updated_daily: state.master.updated_daily || [],
  main_page: state.master.main_page || [],
  featured_story: state.master.featured_story || [],
  top_stories: state.master.top_stories || [],
});

const mapDispatchToProps = { read };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
