import React, {useEffect, useState} from "react";
import {
    useParams,
    Link
} from "react-router-dom";
import {getCommits} from "../../services/githubService";
import List from "../List/List";
import Title from "../Title/Title";
import EmptyDisplay from "../EmptyDisplay/EmptyDisplay";
import Loader from "../Loader/Loader";
import {formatDateByDay} from "../../utils/helpers";
import moment from "moment";
import './CommitsScreen.scss';


const CommitsScreen = () => {
    let {owner, name} = useParams();
    const [commits, setCommits] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const today = moment().toISOString(true);


    useEffect(() => {
        setIsLoading(true)
        getCommits(owner, name).then((data) => {
            setCommits(data)
            setIsLoading(false)
        })
    }, [])

    let commitsContent;
    if (isLoading) {
        commitsContent = <Loader message="Getting commits..." />;
    } else if (commits.length > 0) {
        commitsContent = <List data={commits} />;
    } else {
        commitsContent = <EmptyDisplay message="No recent commits to display" />;
    }

    return (
        <div className="commits-screen-container">
            <div className="commits-screen-header">
                <Link to="/">Back</Link>
                <Title title={`Commits on ${formatDateByDay(today)}`}/>
            </div>
            {commitsContent}
        </div>
    )
}


export default CommitsScreen;
