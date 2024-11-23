export default function Button({
    children,
    type="button",
    bgColor="",
    textColor="text-white",
    className="",
    ...props //...props captures any extra props not explicitly listed.
}) {
  return (
    <button type={type} className={`px-[12px] py-[6.5px] rounded-lg font-[600] hover:bg-gray-800 bg-blue-600 transition-[1s]  ${bgColor} ${textColor} ${className}`} {...props}>
        {children}
    </button>
  )
}
