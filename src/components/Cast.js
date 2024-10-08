const Cast = (props) => {
    return (
        <div>
          <div className="flex flex-col items-center gap-1">
              <div className="w-24 h-32 gap-2">
                  <img 
                    src={props.image}
                    alt="crew man"
                    className="w-full h-full rounded-full "
                  />
              </div>
              <h1 className="text-xl text-gray-800">{props.castName}</h1>
              <h5 className="text-xs text-gray-500">as {props.role}</h5>
          </div>
        </div>
    )
}

export default Cast;