import { ComponentPropsWithoutRef } from 'react'
import logoPC from '../../assets/images/logo-pc.svg'
import logoMobile from '../../assets/images/logo-mobile.svg'
import iconTrade from '../../assets/images/icon-trade.svg'
import iconTechnology from '../../assets/images/icon-technology.svg'
import iconCheck from '../../assets/images/icon-check.svg'
import iconSquareEmpty from '../../assets/images/icon-square-empty.svg'

// SVG registry mapping
const svgRegistry: Record<string, string> = {
  'logo-pc': logoPC,
  'logo-mobile': logoMobile,
  'icon-trade': iconTrade,
  'icon-technology': iconTechnology,
  'icon-check': iconCheck,
  'icon-square-empty': iconSquareEmpty,
}

interface IconSvgProps extends Omit<ComponentPropsWithoutRef<'img'>, 'src'> {
  name: keyof typeof svgRegistry
  alt: string
  className?: string
  width?: number | string
  height?: number | string
  size?: number | string // Convenience prop for square icons
}

const IconSvg = ({ 
  name,
  alt, 
  className = '', 
  width,
  height,
  size,
  style,
  ...props 
}: IconSvgProps) => {
  const svgSrc = svgRegistry[name]
  
  if (!svgSrc) {
    console.warn(`IconSvg: SVG "${name}" not found in registry`)
    return null
  }

  const iconStyle = {
    ...(size && { width: size, height: size }),
    ...(width && { width }),
    ...(height && { height }),
    ...style,
  }

  return (
    <img
      src={svgSrc}
      alt={alt}
      className={className}
      style={iconStyle}
      {...props}
    />
  )
}

export default IconSvg
