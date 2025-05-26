import { useState } from 'react'
import Sidebar from "./components/Sidebar"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Form from "./components/Form"
import Table from "./components/Table"
import {Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="wrapper">
  {/* Sidebar */}
  <Sidebar/>
  {/* End Sidebar */}
  <div className="main-panel">
    
    <Header/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/form" element={<Form/>}/>
      <Route path="/table" element={<Table/>}/>
    </Routes>
    
    <Footer/>
  </div>
  {/* Custom template | don't include it in your project! */}
  <div className="custom-template">
    <div className="title">Settings</div>
    <div className="custom-content">
      <div className="switcher">
        <div className="switch-block">
          <h4>Logo Header</h4>
          <div className="btnSwitch">
            <button type="button" className="selected changeLogoHeaderColor" data-color="dark" />
            <button type="button" className="changeLogoHeaderColor" data-color="blue" />
            <button type="button" className="changeLogoHeaderColor" data-color="purple" />
            <button type="button" className="changeLogoHeaderColor" data-color="light-blue" />
            <button type="button" className="changeLogoHeaderColor" data-color="green" />
            <button type="button" className="changeLogoHeaderColor" data-color="orange" />
            <button type="button" className="changeLogoHeaderColor" data-color="red" />
            <button type="button" className="changeLogoHeaderColor" data-color="white" />
            <br />
            <button type="button" className="changeLogoHeaderColor" data-color="dark2" />
            <button type="button" className="changeLogoHeaderColor" data-color="blue2" />
            <button type="button" className="changeLogoHeaderColor" data-color="purple2" />
            <button type="button" className="changeLogoHeaderColor" data-color="light-blue2" />
            <button type="button" className="changeLogoHeaderColor" data-color="green2" />
            <button type="button" className="changeLogoHeaderColor" data-color="orange2" />
            <button type="button" className="changeLogoHeaderColor" data-color="red2" />
          </div>
        </div>
        <div className="switch-block">
          <h4>Navbar Header</h4>
          <div className="btnSwitch">
            <button type="button" className="changeTopBarColor" data-color="dark" />
            <button type="button" className="changeTopBarColor" data-color="blue" />
            <button type="button" className="changeTopBarColor" data-color="purple" />
            <button type="button" className="changeTopBarColor" data-color="light-blue" />
            <button type="button" className="changeTopBarColor" data-color="green" />
            <button type="button" className="changeTopBarColor" data-color="orange" />
            <button type="button" className="changeTopBarColor" data-color="red" />
            <button type="button" className="selected changeTopBarColor" data-color="white" />
            <br />
            <button type="button" className="changeTopBarColor" data-color="dark2" />
            <button type="button" className="changeTopBarColor" data-color="blue2" />
            <button type="button" className="changeTopBarColor" data-color="purple2" />
            <button type="button" className="changeTopBarColor" data-color="light-blue2" />
            <button type="button" className="changeTopBarColor" data-color="green2" />
            <button type="button" className="changeTopBarColor" data-color="orange2" />
            <button type="button" className="changeTopBarColor" data-color="red2" />
          </div>
        </div>
        <div className="switch-block">
          <h4>Sidebar</h4>
          <div className="btnSwitch">
            <button type="button" className="changeSideBarColor" data-color="white" />
            <button type="button" className="selected changeSideBarColor" data-color="dark" />
            <button type="button" className="changeSideBarColor" data-color="dark2" />
          </div>
        </div>
      </div>
    </div>
    <div className="custom-toggle">
      <i className="icon-settings" />
    </div>
  </div>
  {/* End Custom template */}
</div>
    </>
  )
}

export default App
