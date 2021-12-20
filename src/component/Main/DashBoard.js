import React from 'react'
import Layout from '../../Layout/Layout'
import Sidebar from "../Sidebar"
import Board from "./Board"
const index = () => {
  return (
    <Layout >
      <Sidebar />
      <Board />
    </Layout>
  )
}

export default index
