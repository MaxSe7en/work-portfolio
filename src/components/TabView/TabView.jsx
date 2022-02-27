import React from "react";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
  
import Button from '../../components/Button/Button';
import { images } from '../../constants';

const TabView = () => {
  const [value, setValue] = React.useState(2);
  
  return (
    <div className="app__bg tab"
    //   style={{
    //     marginLeft: "40%",
    //   }}
    >
      {/* <h2>How to Create Tabs in ReactJS?</h2> */}
      <Paper square>
        <Tabs
          value={value}
          textColor="primary"
          indicatorColor="primary"
          centered={true}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Tab className="tabs" label="Mobile" />
          <Tab className="tabs" label="Front End" />
          <Tab className="tabs" label="Backend" disabled />
          <Tab className="tabs" label="Database" />
        </Tabs>
        <>{(value ===1) ? <>
    <Button image={images.apple}  platform={'iOS'}/>
    <Button image={images.android}  platform={'Android'}/>
    <Button image={images.flutter}  platform={'Flutter'}/>
    <Button image={images.kotlin}  platform={'Kotlin'}/>
    <Button  image={images.swift} platform={'Swift'}/>
    {/* <Button platform={'iOS'}/>
    <Button platform={'iOS'}/>
    <Button platform={'iOS'}/>
    <Button platform={'iOS'}/>
    <Button platform={'iOS'}/>
    <Button platform={'iOS'}/> */}
   </> : <div></div> }</>
      </Paper>
    </div>
  );
};
  
export default TabView;