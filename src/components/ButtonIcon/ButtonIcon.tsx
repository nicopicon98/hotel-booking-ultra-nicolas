import classes from './ButtonIcon.module.css'
import { IconType } from 'react-icons/lib';
import { FC } from 'react'

interface Props {
  onClick: () => void;
  iconSize?: number;
  btnStyles?: string
  Icon: IconType;
  colorIcon?: string;
}

export const ButtonIcon: FC<Props> = ({ Icon, onClick, btnStyles = "", colorIcon = 'white', iconSize = 20 }) => {
  return (
    <div className={classes.btnContainer}>
      <button onClick={onClick} className={`${classes.btn} ${btnStyles}`}>
        <Icon color={colorIcon} size={iconSize} style={{ alignSelf: 'center' }} />
      </button>
    </div>
  )
}