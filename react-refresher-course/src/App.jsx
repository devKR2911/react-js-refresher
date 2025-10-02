import PostList from "./components/PostList/PostList";
import MainHeader from "./components/MainHeader/MainHeader";
import { useState } from "react";

function App() {
  const [isModalVisible, setisModalVisible] = useState(false);
  return (
    <>
      <MainHeader onCreatePost={() => setisModalVisible(true)}></MainHeader>
      <main>
        <PostList
          isModalVisible={isModalVisible}
          setisModalVisible={setisModalVisible}
        />
      </main>
    </>
  );
}

export default App;
