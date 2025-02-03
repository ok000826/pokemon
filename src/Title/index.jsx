import React, { useState, useEffect } from "react";
import axios from "axios";

const Title = (props) => {
    console.log('props = ', props);
    const { title } = props;
    return <div> {title} </div>
};


function myFunc(value) {
    console.log(value);
}

myFunc(1);
myFunc(2)

export default Title;