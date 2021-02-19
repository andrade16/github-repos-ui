import React, {useState, useEffect} from "react";
import {getStarredRepos, getCommits} from "../../services/githubService";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";

const Screen = () => {

    const [repos, setRepos] = useState([]);
    const [commits, setCommits] = useState(false);
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getStarredRepos().then((data) => {
            setRepos(data.items);
            setIsLoading(false);
        })
    }, []);


    let content = <Loader message="Loading..."/>


    return (
        <div>
            <Navbar/>
            <div className="spacer">&nbsp;</div>
            <div className="container">
                {content}
            </div>
        </div>
    );
};

export default Screen;
