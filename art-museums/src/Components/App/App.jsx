import { useState, useEffect } from "react";
import axios from "axios";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import Card from "../Card/Card";
import Nav from "../Nav/Nav";

import "./App.css";

function App() {
  const numQ = Math.floor(Math.random() * 10);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [classification, setClassification] = useState("");
  const [century, setCentury] = useState("");
  const [culture, setCulture] = useState("");
  const [dated, setDated] = useState("");
  const [name, setName] = useState("");
  const [num, setNum] = useState(Math.floor(Math.random() * 300));
  const [banList, setBanList] = useState([]);

  let URL =
    "https://api.harvardartmuseums.org/object?size=300&apikey=8c13abe7-a502-4d0a-b52b-5047fc3f0462";

  const fetchData = async () => {
    axios.get(URL).then((res) => {
      const data = res.data.records[num];
      if (data == undefined) {
        setNum(
          Math.floor(Math.random() * 300) - Math.floor(Math.random() * 10)
        );
        fetchData();
      } else {
        setImage(data.images[0].baseimageurl);
        setTitle(data.title);
        setClassification(data.classification);
        setCentury(data.century);
        setCulture(data.culture);
        setDated(data.dated);
        setName(data.people[0].name);
      }
    });
  };
  const handleChange = async () => {
    axios.get(URL).then((res) => {
      setNum(Math.floor(Math.random() * 300) - Math.floor(Math.random() * 10));
      const data = res.data.records[num];
      if (data == undefined) {
        setNum(Math.floor(Math.random() * 300) + 4);
      }

      setImage(data.images[0].baseimageurl);
      setTitle(data.title);
      setClassification(data.classification);
      setCentury(data.century);
      setCulture(data.culture);
      setDated(data.dated);
      setName(data.people[0].name);

      console.log(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <p>ART</p>
      <p>MUSEUM.</p>
      <hr />
      <Card
        image={image}
        setImage={setImage}
        title={title}
        setTitle={setTitle}
        classification={classification}
        setClassification={setClassification}
        century={century}
        setCentury={setCentury}
        culture={culture}
        setCulture={setCulture}
        dated={dated}
        setDated={setDated}
        name={name}
        setName={setName}
        banList={banList}
        setBanList={setBanList}
      />

      <Nav banList={banList} handleChange={handleChange} />

      <hr />
    </div>
  );
}

export default App;
