function Input(props) {
    return (
        <div className="flex flex-col text-white mb-5">
            <p className="text-base">{props.desc}</p>
            <label className='text-sm mb-1'>{props.textinho}</label>
            <input className="rounded-sm h-8" placeholder={props.placeholder} />
        </div>
    );
}

export default Input;