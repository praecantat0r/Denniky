import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { QuerySnapshot, collection, getDoc, getDocs, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import Footer from "./Footer"
import { useNavigate } from "react-router";
import Post from './Post_preview'
import { get } from "firebase/database";
function View_Posts() {
    const [userUid, setUserUid] = useState(null);
    const [userData, setUserData] = useState(null);
    const [trips, setTrips] = useState([])
    const navigate = useNavigate();
    const auth = getAuth();
  
    useEffect(() => {
      // Use Firebase Authentication to get the user's UID
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setUserUid(user.uid);
          const getPosts = [];
          const tripCollection = collection(db, user.uid);
          const tripQuery = query(tripCollection, orderBy('Date', 'asc')); 
          const Posts = await getDocs(tripQuery)
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              getPosts.push({
                ...doc.data(),
                id: doc.id,
              });
            });
          });
          setTrips(getPosts);

        } else {
          setUserUid(null);
        }
      });
    }, []);

    const [isFullPost, setIsFullPost] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
  
    const handlePostClick = (item) => {
      setIsFullPost(true);
      setSelectedPost(item);
    };
  
    const handleBackToPreview = () => {
      setIsFullPost(false);
      setSelectedPost(null);
    };

    return (
        <div>

        <body>
        <div>
            <div className="bg-[url('/Assets/main-small-bg.png')] flex h-screen items-center justify-center bg-cover 2xl:bg-[url('/Assets/background.png')] md:bg-[url('/Assets/md-screen-bg.png')]">
            {isFullPost ? (
                        <div className="h-[90vh] mb-10 mx-2 top-0 w-screen bg-white border-4 border-black rounded-lg">
                          <div className=" w-full flex flex-col p-5">
                            <p className="flex items-center justify-center text-gray-600 font-bold text-2xl pb-10 font-dotgothic">{selectedPost.Icon}{selectedPost.Title}{selectedPost.Icon}</p>
                            <textarea className="h-[70vh] flex items-center justify-center text-gray-600 text-center">{selectedPost.Description}</textarea>
                            <button className="w-full rounded-md text-gray-600 font-bold" onClick={handleBackToPreview}>Go Back</button>
                          </div>
                           </div>
                    ) : (
                      <div className="absolute h-[95vh] top-0 w-screen flex flex-col flex-nowrap overflow-auto">
                      {trips.map(function (item, id) {
                        return (
                          <div key={id} onClick={() => handlePostClick(item)}>
                            <Post
                              Title={item.Title}
                              Description={item.Description}
                              Icon={item.Icon}
                              Date={item.Date}
                            />
                          </div>
                        );
                      })}
                      </div>
                    )
                    }
            </div>
        </div>
    </body>
    <Footer></Footer>
    </div> 
    );
}
export default View_Posts