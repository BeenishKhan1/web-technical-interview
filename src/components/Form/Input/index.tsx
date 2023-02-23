import TextField from "@mui/material/TextField"

interface Inputprops {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  type: "email" | "password"
  required: boolean
}

const Input = (props: Inputprops) => {
  const { value, required, onChange, placeholder, type } = props
  return (
    <TextField
      placeholder={placeholder}
      type={type}
      value={value}
      required={required}
      onChange={onChange}
    />
  )
}

export default Input
