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
    

    // const getItems = async () => {
    //     const list = [];
    //     const querySnapshot = await getDocs(collection(db, userUid))
    //         .then((querySnapshot) => {
    //         const dataArray = querySnapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             data: doc.data(),
    //       }))
    //       setTrips(dataArray);
    //     });
    // };

    return (
        <div>

        <body>
        <div>
            <div className="bg-[url('/Assets/main-small-bg.png')] flex h-screen items-center justify-center bg-cover 2xl:bg-[url('/Assets/background.png')] md:bg-[url('/Assets/md-screen-bg.png')]">
                <div className="absolute h-[95vh] top-0 w-screen flex flex-col flex-nowrap overflow-auto">
                  
                  {trips.map(function(item, id){ 
                    return <Post  key={id} Title={item.Title} Description={item.Description} Icon={item.Icon} Date={item.Date}></Post>})}
                </div>
            </div>
        </div>
    </body>
    <Footer></Footer>
    </div> 
    );
}
export default View_Posts