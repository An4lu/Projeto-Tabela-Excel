import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers'

interface CustomDatePickerProps {
  label?: string
  onChange?: (value: Date | null) => void
}

export const InputData = ({ label, onChange }: CustomDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
        <DatePicker
          label={label}
          sx={{ width: '100%' }}
          onChange={(value: Date | null) => {
            onChange && onChange(value)
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}
