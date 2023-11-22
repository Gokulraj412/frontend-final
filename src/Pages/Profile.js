import React,{useState, useEffect} from "react";
import "../Stylesheets/Profile.scss";
import astrologer from "../Assests/astrologer.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";

function Profile(props) {

  const [astrologers, setAstrologers] = useState(null)
  const navigate = useNavigate()
  const {id} = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_URL}/api/v1/astrologer/getAstrologer/${id}`, {
          method: 'GET',
        });

        if (!response.ok) {
          // Handle non-successful response (e.g., 404 Not Found)
          console.error(`Error: ${response.status} - ${response.statusText}`);
          return;
        }

        const data = await response.json();
         console.log(data);
         setAstrologers(data)
         console.log('astro',astrologers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    },[]);


  return (
    <main className="card profile_container">
      <section>
        <div>
          <h3>Profile</h3>
          <div
            style={{
              height: "3px",
              width: "40px",
              backgroundColor: "#0042ae",
              borderRadius: "10px",
              marginTop: "3px",
            }}
          ></div>
        </div>
      </section>

      <article  className="profile_detail">

          <div className="my-4">
          <h5>FirstName</h5>
          <p>{astrologers?.astrologer?.firstname}</p>
        </div>

      
        <div className="my-4">
          <h5>LastName</h5>
          <p>{astrologers?.astrologer?.lastname}</p>
        </div>
        <div className="my-4">
          <h5>Date Of Birth</h5>
          <p>{astrologers?.astrologer?.dob}</p>
        </div>
        <div className="my-4">
          <h5>Photo</h5>
          <div className="img">
            <img src={astrologers?.astrologer?.profilePic[0]?.pic} alt='' />
          </div>
        </div>
        <div className="my-4">
          <h5>Gender</h5>
          <p>{astrologers?.astrologer?.gender}</p>
        </div>

        <div className="my-4">
          <h5>Email address</h5>
          <p>{astrologers?.astrologer?.email}</p>
        </div>

        <div className="my-4">
          <h5>Primary Mobile No</h5>
          <p>{astrologers?.astrologer?.mobilePrimery}</p>
        </div>

        <div className="my-4">
          <h5>Secondry Mobile No</h5>
          <p>{astrologers?.astrologer?.mobileSecondry}</p>
        </div>

        <div className="my-4">
          <h5>Education Qualification</h5>
          <p>{astrologers?.astrologer?.qualifications}</p>
        </div>

        <div className="my-4">
          <h5>Address</h5>
          <p>{astrologers?.astrologer?.address}</p>
        </div>
        <div className="my-4">
          <h5>District</h5>
          <p>{astrologers?.astrologer?.district}</p>
        </div>
        <div className="my-4">
          <h5>State</h5>
          <p>{astrologers?.astrologer?.state}</p>
        </div>
        <div className="my-4">
          <h5>Country</h5>
          <p>{astrologers?.astrologer?.country}</p>
        </div>
        <div className="my-4">
          <h5>Pincode</h5>
          <p>{astrologers?.astrologer?.pincode}</p>
        </div>

        <h2 style={{ textDecoration: "underline",paddingBottom:"1.5rem"}}>
          Astrology Related Details
        </h2>

        <div className="my-4">
          <h5>Astrology School Name / Guru Name</h5>
          <p>{astrologers?.astrologer?.institute}</p>
        </div>
        <div className="my-4">
          <h5>Experience in Yrs</h5>
          <p>{astrologers?.astrologer?.experience}</p>
        </div>

        <div className="my-4">
          <h5>Certificates</h5>
          <div className="img">
          {astrologers?.astrologer?.certificates.map((file)=>(
             <img src={file.file} alt="" />
          ))} 


           
          </div>
        </div>
        <div className="my-4">
          <h5>What do you mean by astrology?</h5>
          <p>
          {astrologers?.astrologer?.astrologyDescription}
   
          </p>
        </div>
        <div className="my-4">
          <h5>Describe about your experience you gained in astrology?</h5>
          <p>
          {astrologers?.astrologer?.astrologyExperience}
          </p>
        </div>

        <div className="my-4">
          <h5>Describe about your individuality in astrology?</h5>
          <p>
          {astrologers?.astrologer?.astrologyExpertise}
          </p>
        </div>

        <div className="my-4">
          <h5>How do you know about us?</h5>
          <p>
          {astrologers?.astrologer?.knowus}
          </p>
        </div>

        <div className="my-4">
          <h5>Maximum time you can spent in Astro5Star per day(in Hrs)?</h5>
          <p>
          {astrologers?.astrologer?.maxTime}
         
          </p>
        </div>
     
      </article>

      <div className="btnGroup">
       
          <button className="btns" onClick={()=> navigate(`/editprofile/${astrologers?.astrologer?._id}`)}>Edit</button>

      </div>
     
    </main>
  );
}

export default Profile;
