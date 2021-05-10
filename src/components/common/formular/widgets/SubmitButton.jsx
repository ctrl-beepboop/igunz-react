const SubmitButton = (props) => {
    return (
        <>
            <div className={"input-" + props.name}>
                <button type='submit' name={props.name} className={props.buttonState}>
                    {props.label}
                </button>
            </div>
        </>
    );
};

export default SubmitButton;
