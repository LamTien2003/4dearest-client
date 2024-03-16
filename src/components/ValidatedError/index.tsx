import { IValidatedError } from "@/components/ValidatedError/ValidatedError.d";

const ValidatedError = ({ touched, error }: IValidatedError) => {
  return (
    <div className="d-flex flex-nowrap">
      {touched && error && (
        <span
          className="color--error"
          style={{
            fontSize: "1.35rem",
            fontWeight: 500,
            margin: "2px 0 0 2px",
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default ValidatedError;
