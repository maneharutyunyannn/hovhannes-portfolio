import {
    Controller,
    type ControllerProps,
    type FieldPath,
    type FieldValues,
} from "react-hook-form";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/shadcn-ui/field";
import {Textarea as UITextarea} from "@/components/shadcn-ui/textarea";

type Props = {
    placeholder?: string;
    description?: string;
    label?: string;
    className?: string;
    inputClassName?: string;
    required?: boolean;
};

export function Textarea<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TTransformedValues = TFieldValues,
>({
      label,
      placeholder,
      description,
      className,
      inputClassName,
      control,
      name,
      shouldUnregister,
      disabled,
      required,
      defaultValue,
  }:
      Omit<ControllerProps<TFieldValues, TName, TTransformedValues>, "render"> &
      Props
) {
    return (
        <Controller
            {...{
                control,
                name,
                shouldUnregister,
                disabled,
                defaultValue,
            }}
            render={({field, fieldState}) => (
                <Field className={className} data-invalid={fieldState.invalid}>
                    {label && (
                        <FieldLabel  className="text-[#18120E] text-[16px] font-semibold leading-[18px] md:leading-[24px]">
                            {label}{" "}
                            {required && (
                                <span className="text-destructive">
									* <span className="sr-only">(required)</span>
								</span>
                            )}
                        </FieldLabel>
                    )}

                    <UITextarea
                        {...field}
                        className={inputClassName}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder={placeholder}
                        autoComplete="off"
                    />
                    {description && <FieldDescription>{description}</FieldDescription>}
                    {fieldState.invalid && <FieldError errors={[fieldState.error]}/>}
                </Field>
            )}
        />
    );
}
