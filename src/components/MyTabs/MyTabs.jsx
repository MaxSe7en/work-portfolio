import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "../../components/Button/Button";
import { images } from "../../constants";
import "./MyTabs.css";
const MyTabs = () => {
  const [value, setValue] = React.useState(2);
  const styles = (theme) => ({
    indicator: {
      color: "#e7e1e1",
    },
  });

  return (
    <div>
      <Tabs
        value={value}
        centered="true"
        scrollButtons="on"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#DCCA87",
          },
        }}
        className="tab"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Tab
          classes={{
            indicator: styles.indicator,
          }}
          className="tabs"
          label="Mobile"
        />
        <Tab className="tabs" label="Front End" />
        <Tab className="tabs" label="Backend" />
        <Tab className="tabs" label="Database" />
      </Tabs>
      <div className="flex__center">
        {value === 0 ? (
          <div className="app__grid">
            <Button image={images.apple} platform={"iOS"} />
            <Button image={images.android} platform={"Android"} />
            <Button image={images.flutter} platform={"Flutter"} />
            <Button image={images.kotlin} platform={"Kotlin"} />
            <Button image={images.swift} platform={"Swift"} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex__center app__flex-column">
        {value === 1 ? (
          <div className="app__grid">
            <Button image={images.angularjs} platform={"Angular JS"} />
            <Button image={images.react} platform={"React JS"} />
            <Button image={images.vue} platform={"Vue JS"} />
            <Button image={images.html} platform={"HTML 5"} />
            <Button image={images.css} platform={"CSS 3"} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex__center">
        {value === 2 ? (
          <div className="app__grid">
            <Button image={images.php} platform={"PHP"} />
            <Button image={images.node} platform={"Node JS"} />
            <Button image={images.java} platform={"Java"} />
            <Button image={images.laravel} platform={"Laravel"} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex__center">
        {value === 3 ? (
          <div className="app__grid">
            <Button image={images.firebase} platform={"FireBase"} />
            <Button image={images.mysql} platform={"MySQL"} />
            <Button image={images.mongodb} platform={"Mongo DB"} />
            <Button image={images.kotlin} platform={"Kotlin"} />
            <Button image={images.swift} platform={"Swift"} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MyTabs;
