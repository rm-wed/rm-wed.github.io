import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  plusOneAllowed: boolean;
  mairieInvited: boolean;
}

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwB8oyeGzNUP8qu5G546v4KRwjHzk5ozYW1nK4YQ-wzHoj-FA4Q_FvUeICz8E5FJb9s/exec"; // ← replace after deploying

type Attendance = "yes" | "no" | null;
type PlusOne = "yes" | "no" | null;

export function RsvpModal({ open, onClose, plusOneAllowed, mairieInvited }: Props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>(null);
  const [plusOne, setPlusOne] = useState<PlusOne>(null);
  const [plusFirstName, setPlusFirstName] = useState("");
  const [plusLastName, setPlusLastName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function reset() {
    setFirstName("");
    setLastName("");
    setAttendance(null);
    setPlusOne(null);
    setPlusFirstName("");
    setPlusLastName("");
    setSubmitting(false);
    setSubmitted(false);
    setError(null);
  }

  function handleClose() {
    onClose();
    // Let exit animation finish before resetting
    setTimeout(reset, 300);
  }

  async function handleSubmit() {
    if (!firstName.trim() || !lastName.trim()) {
      setError("Veuillez entrer votre prénom et votre nom.");
      return;
    }
    if (!attendance) {
      setError("Veuillez indiquer si vous serez présent(e).");
      return;
    }
    if (plusOneAllowed && attendance !== "no" && !plusOne) {
      setError("Veuillez indiquer si vous viendrez accompagné(e).");
      return;
    }
    if (plusOneAllowed && plusOne === "yes" && (!plusFirstName.trim() || !plusLastName.trim())) {
      setError("Veuillez entrer le prénom et le nom de votre accompagnant(e).");
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const formData = new URLSearchParams();
      formData.append("firstName", firstName.trim());
      formData.append("lastName", lastName.trim());
      formData.append("attendance", attendance);
      formData.append("plusOne", plusOne ?? "n/a");
      formData.append("plusFirstName", plusFirstName.trim());
      formData.append("plusLastName", plusLastName.trim());
      const now = new Date();
      const ts = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      formData.append("timestamp", ts);
      formData.append("mairieInvited", mairieInvited ? "yes" : "no");

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full max-w-md rounded-2xl border border-rose-light/40 bg-parchment px-6 py-8 shadow-2xl sm:px-8 sm:py-10"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.18 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Close"
              className="absolute right-4 top-4 text-wine-light transition-colors hover:text-wine"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {submitted ? (
              /* ── Success state ── */
              <motion.div
                className="flex flex-col items-center gap-4 py-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="text-4xl">💌</span>
                <h3 className="font-heading text-2xl font-semibold text-wine">
                  Merci !
                </h3>
                <p className="font-body text-base leading-relaxed text-wine-light">
                  Votre RSVP a bien été reçu.
                  <br />
                  Nous avons hâte de célébrer avec vous !
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 rounded-full border border-rose/30 px-8 py-2.5 font-heading text-sm font-medium tracking-wide text-wine transition-colors hover:bg-rose-light/20"
                >
                  Fermer
                </button>
              </motion.div>
            ) : (
              /* ── Form ── */
              <div className="flex flex-col gap-6">
                <h3 className="text-center font-heading text-2xl font-semibold tracking-wide text-wine sm:text-3xl">
                  RSVP
                </h3>

                {/* Name fields */}
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    label="Prénom"
                    value={firstName}
                    onChange={setFirstName}
                  />
                  <Input
                    label="Nom"
                    value={lastName}
                    onChange={setLastName}
                  />
                </div>

                {/* Will you attend? */}
                <fieldset className="flex flex-col gap-4">
                  <legend className="mb-2 font-body text-base font-medium tracking-wide text-wine">
                    Serez-vous présent(e) ?
                  </legend>
                  <div className="flex gap-2">
                    <ToggleBtn
                      active={attendance === "yes"}
                      onClick={() => setAttendance("yes")}
                    >
                      Oui
                    </ToggleBtn>
                    <ToggleBtn
                      active={attendance === "no"}
                      onClick={() => {
                        setAttendance("no");
                        setPlusOne(null);
                        setPlusFirstName("");
                        setPlusLastName("");
                      }}
                    >
                      Non
                    </ToggleBtn>
                  </div>
                </fieldset>

                {/* Plus-one (hidden if "no" or not allowed) */}
                {plusOneAllowed && attendance && attendance !== "no" && (
                  <motion.fieldset
                    className="flex flex-col gap-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                  >
                    <legend className="mb-2 font-body text-base font-medium tracking-wide text-wine">
                      Viendrez-vous avec un(e) accompagnant(e) ?
                    </legend>
                    <div className="flex gap-2">
                      <ToggleBtn
                        active={plusOne === "yes"}
                        onClick={() => setPlusOne("yes")}
                      >
                        Oui
                      </ToggleBtn>
                      <ToggleBtn
                        active={plusOne === "no"}
                        onClick={() => {
                          setPlusOne("no");
                          setPlusFirstName("");
                          setPlusLastName("");
                        }}
                      >
                        Non
                      </ToggleBtn>
                    </div>
                  </motion.fieldset>
                )}

                {/* +1 name fields */}
                {plusOneAllowed && plusOne === "yes" && (
                  <motion.div
                    className="grid grid-cols-2 gap-3"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                  >
                    <Input
                      label="Prénom +1"
                      value={plusFirstName}
                      onChange={setPlusFirstName}
                    />
                    <Input
                      label="Nom +1"
                      value={plusLastName}
                      onChange={setPlusLastName}
                    />
                  </motion.div>
                )}

                {/* Error message */}
                {error && (
                  <p className="text-center font-body text-sm text-red-600">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="mt-2 w-full rounded-full bg-rose px-8 py-3.5 font-heading text-lg font-medium tracking-wide text-white shadow-md transition-all duration-300 hover:bg-rose-dark hover:shadow-lg active:scale-[.97] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Envoi…" : "Envoyer"}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Reusable text input ── */
function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="font-body text-base font-medium tracking-wide text-wine-light">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-rose-light/50 bg-parchment-50 px-3.5 py-2.5 font-body text-base text-wine placeholder:text-wine-light/40 focus:border-rose focus:outline-none focus:ring-1 focus:ring-rose/30"
      />
    </label>
  );
}

/* ── Toggle button for choices ── */
function ToggleBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-full border px-4 py-2.5 font-heading text-sm font-medium tracking-wide transition-all duration-200 ${
        active
          ? "border-rose bg-rose text-white shadow-sm"
          : "border-rose/30 bg-parchment-50 text-wine hover:border-rose/50 hover:bg-rose-light/20"
      }`}
    >
      {children}
    </button>
  );
}
