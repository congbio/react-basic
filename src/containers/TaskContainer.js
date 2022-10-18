import React from 'react'
import { useState } from 'react';
import {ScrollView } from "react-native";
import styles from './style';
// import Task from "../components/task/Task";
const TaskContainer = () => {
    const [taskList, setTaskList] = useState([
        "launha",
        "sdhf",
        "jdhsfd"
    ])
    const handAddTask = (task) => {
      setTaskList([...taskList,task]);
    }
  return (
    <ScrollView style={styles.listContent}>
      {
        taskList.map((ele,index)=>{
          return (
            <Task task={ele} number= {index} />
            
          )
        })
      }
    </ScrollView>
   
  )
}

export default TaskContainer