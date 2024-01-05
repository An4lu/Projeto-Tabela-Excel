import { useState } from 'react'
import { Heading } from '../../components/Heading'
import { Select } from '../../components/Select'
import { Back, Button, Div, Form, Line, LineData, Title } from './styles'
import { InputData } from '../../components/InputData'
import { MultiSelect } from '../../components/MultiSelect'
import dayjs, { Dayjs } from 'dayjs'
import * as XLSX from 'xlsx'

type OptionType = {
  value: string
  label: string
}

const options: OptionType[] = [
  { value: 'opcao1', label: 'Opção 1' },
  { value: 'opcao2', label: 'Opção 2' },
  { value: 'opcao3', label: 'Opção 3' },
  { value: 'opcao4', label: 'Opção 4' },
  { value: 'opcao5', label: 'Opção 5' },
  { value: 'opcao6', label: 'Opção 6' },
]

export const Home = () => {
  const [cliente, setCliente] = useState<string>('')
  const [dataInicial, setDataInicial] = useState<Dayjs | null>(null)
  const [dataFinal, setDataFinal] = useState<Dayjs | null>(null)
  const [fornecedor, setFornecedor] = useState<string[]>([])

  const handleDateChange = (value: Date | null, inputType: string) => {
    const dayjsValue = value ? dayjs(value) : null

    if (inputType === 'dataInicial') {
      setDataInicial(dayjsValue)
    } else if (inputType === 'dataFinal') {
      setDataFinal(dayjsValue)
    }
  }
  const handleFornecedorChange = (selectedOptions: OptionType[] | null) => {
    if (selectedOptions) {
      const selectedValues = selectedOptions.map(
        (option) => option.value as string,
      )
      setFornecedor(selectedValues)
    } else {
      setFornecedor([])
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const dadosFormulario = {
      cliente,
      dataInicial: dataInicial?.format('YYYY-MM-DD') || '',
      dataFinal: dataFinal?.format('YYYY-MM-DD') || '',
      fornecedor: fornecedor.join(', '),
    }

    console.log('Dados do formulário:', dadosFormulario)

    try {
      // Criar uma folha de cálculo (workbook)
      const wb = XLSX.utils.book_new()
      const ws = XLSX.utils.json_to_sheet([dadosFormulario], {
        header: Object.keys(dadosFormulario),
      })

      // Adicionar a folha de cálculo ao workbook
      XLSX.utils.book_append_sheet(wb, ws, 'Formulario')

      // Salvar o arquivo usando file-saver
      XLSX.writeFile(wb, 'formulario.xlsx')
    } catch (error) {
      console.error('Erro ao gerar a planilha:', error)
    }
  }

  return (
    <Div>
      <Back>
        <Heading css={{ fontSize: '30px', margin: '45px 0 30px 0' }}>
          Relatório de Prestação de Serviço
        </Heading>
        <Form onSubmit={handleSubmit}>
          <Line>
            <Title>Cliente </Title>
            <Select
              css={{ width: '100%', height: '25px' }}
              id="titulo"
              options={[
                { value: 'Valcoflex', label: 'Valcoflex' },
                { value: 'Cliente 2', label: 'Cliente 2' },
              ]}
              onValueChange={(value) => setCliente(value)}
              defaultValue={cliente}
            />
          </Line>
          <LineData>
            <InputData
              label="Data Inicial"
              onChange={(value) => handleDateChange(value, 'dataInicial')}
            />
            <InputData
              label="Data Final"
              onChange={(value) => handleDateChange(value, 'dataFinal')}
            />
          </LineData>
          <Line>
            <Title>Fornecedor </Title>
            <MultiSelect
              options={options}
              onChange={handleFornecedorChange}
              placeholder="Escolha suas opções"
            />
          </Line>
          <Line>
            <Button type="submit">Gerar Relatório</Button>
          </Line>
        </Form>
      </Back>
    </Div>
  )
}
