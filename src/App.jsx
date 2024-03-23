// import SimpleForm from './components/SimpleForm'
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
// import Reusable from './components/Reusable/Reusable'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
//   const handleSignUpSubmit = data =>{
//     console.log('sign up data', data);
// }
//   const handleUpdateProfile = data =>{
//     console.log('update profile', data);
// }

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>




      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <Reusable 
      formTitle={'Sign Up'} 
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>sign up</h2>
          <p>please sign up right now</p>
        </div>
      </Reusable>

      <Reusable 
      formTitle={'Profile Update'} 
      handleSubmit={handleUpdateProfile}
      submitBtnText='Update'>
        <div>
          <h2>update profile</h2>
          <p>please update your profile</p>
        </div>
      </Reusable> */}
    </>
  )
}

export default App
