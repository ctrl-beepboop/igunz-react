const SubmitButton = (props) => {
    return (
        <>
            <div className={"input-" + props.name}>
                <button
                    type='submit'
                    name={props.name}
                    className={props.buttonState}
                    disabled={props.buttonState === "inactive" ? true : false}
                >
                    {props.label}
                </button>
            </div>
        </>
    );
};

export default SubmitButton;
