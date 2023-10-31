


const FormField = ({labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe} ) => {
  return (
    <div>
        <div className="flex items-center gap-2 mb-2">
             <label htmlFor={name} className="block text-sm font-medium text-red-960">
              {labelName}
             </label>
             {isSurpriseMe && (
                <button type="button" onClick={handleSurpriseMe} className="ml-3 font-semibold text-base bg-red-960 py-3 px-6 rounded-[5px] text-white mt-5">Surprise Me !</button>
             )}
        </div>
        <input
       type={type}
       id={name}
       name={name}
      className="bg-gray-900 border border-gray-300 text-white text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3 mt-5 "
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />

    </div>


  )
}

export default FormField