import PropTypes from 'prop-types'

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {

  return <button>{children}</button>;
}

Button.propTypes ={
    checkVariationValue: ({ primary,
        secondary,
        success,
        warning,
        danger,
        outline,
        rounded,}) => {
        const count = Number (!!primary)
        + Number (!!secondary)
        + Number (!!warning)
        + Number (!!success)
        + Number (!!danger) 

        if (count>1){
            return new Error ('Only one of ......')
        }
    }
}
