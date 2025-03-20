import classNames from 'classnames';

const IconButton = ({ variant = 'base', color = 'primary', disabled = false, spin = false, className, children, ...props }) => {
    const BUTTON_VARIANTS = {
        base: classNames('flex items-center transition-transform duration-500 ease-in-out justify-center rounded-lg p-2 font-medium', spin ? 'rotate-180' : 'rotate-0', {
            'bg-skin-primary-inverted text-skin-primary hover:bg-skin-primary hover:text-skin-primary-inverted': color === 'primary' && !disabled,
            'bg-skin-secondary-inverted text-skin-secondary hover:bg-skin-secondary hover:text-skin-secondary-inverted': color !== 'primary' && !disabled,
            'bg-skin-disabled text-skin-muted cursor-not-allowed': disabled,
            'cursor-pointer transition duration-200': !disabled,
        }),

        icon: classNames('text-xl transition-transform duration-500 ease-in-out', spin ? 'rotate-180' : 'rotate-0', {
            'text-skin-primary': color == 'primary' && !disabled,
            'text-skin-secondary': color !== 'primary' && !disabled,
            'text-skin-muted': disabled,
            'cursor-pointer transition duration-200': !disabled,
        }),
    };

    return (
        <button className={classNames(BUTTON_VARIANTS[variant], className)} disabled={disabled} {...props}>
            {children}
        </button>
    );
};

export default IconButton;
