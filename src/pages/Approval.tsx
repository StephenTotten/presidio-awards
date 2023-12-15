import Button from "../components/Button";

const Approval = () => {
    return (
        <>
        <h1 className="nomTitle">Nominations</h1>
        <div className="nominations">
            <h2>Nick Truong</h2>
            <Button text="Approve" />
            <Button text="Reject" 
            id="rejectButton"/>
        </div>
        </>
    );
}

export default Approval;