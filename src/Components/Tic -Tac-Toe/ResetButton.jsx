import { motion } from "framer-motion"

export const ResetButton = ({ resetBoard }) => {
    return (
        <div className="bg-dark_blue rounded-b-2xl py-4">
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="reset-btn font-bold" onClick={resetBoard}>Reset</motion.button>
        </div>
    )
}