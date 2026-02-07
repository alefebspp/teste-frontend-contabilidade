import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  onClick
}: ButtonProps) => {
  if (variant === 'outline') {
    return (
      <S.OutlineButton type={type} onClick={onClick}>
        {children}
      </S.OutlineButton>
    )
  }

  return (
    <S.PrimaryButton type={type} onClick={onClick}>
      {children}
    </S.PrimaryButton>
  )
}

export default Button
