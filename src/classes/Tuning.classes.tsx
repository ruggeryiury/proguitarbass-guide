interface TuningNotesMethodOptions {
    /**
     * If `true`, the method will return all notes inside an array.
     * @default false
     */
    asArray?: boolean,
    /**
     * If `true`, the method will return all notes based on the tuning transpose number.
     * @default false
     */
    transposed?: boolean,
    /**
     * If `true`, the method will return all notes using the sharp symbol, even
     * if the tuning transpose number is negative.
     * @default false
     */
    forceSharp?: boolean
}

interface TuningNameMethodOptions {
    /**
     * If `true`, the method will return all notes based on the tuning transpose number.
     * @default false
     */
    transposed?: boolean
    /**
     * If `true`, the method will return all notes using the sharp symbol, even
     * if the tuning transpose number is negative.
     * @default false
     */
    forceSharp?: boolean
}

export class GuitarTuning {
    /**
     * All note names using the sharp symbol.
     */
    private notes = ['E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B', 'C', 'C♯', 'D', 'D♯']
    /**
     * All note names using the flat symbol.
     */
    private notesFlat = ['E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B', 'C', 'D♭', 'D', 'E♭']
    /**
     * The tuning transpose number given on the class' `constructor()` argument. 
     */
    private transpose: number
    /**
     * An array with each string tuning value.
     */
    tuning: [number, number, number, number, number, number]
    /**
     * An array with each string tuning value transposed.
     */
    transposedTuning: [number, number, number, number, number, number]

    /**
     * A class to provide informations about tuning from PRO Guitar parts.
     * @param tuning {[number, number, number, number, number, number]} An array with each string tuning value.
     * @param transpose {number} The tuning transpose value.
     */
    constructor(
        tuning: [number, number, number, number, number, number],
        transpose: number = 0
    ) {
        this.tuning = tuning
        this.transpose = transpose
        this.transposedTuning = [tuning[0] + transpose, tuning[1] + transpose, tuning[2] + transpose, tuning[3] + transpose, tuning[4] + transpose, tuning[5] + transpose]
    }

    /**
     * Validates string tuning values, so it can be properly assigned to a note
     * on the notes' array variable.
     * @param count {number} The string tuning value to be validated.
     */
    private ValidateTuning(count: number) {

        // These if conditions works to increase or decrease
        // the string tuning value to be properly assigned to a note name.
        
        if (count < 0) {
            count = count + 12

        } else if (count > 11) {
            count = count - 12
        }

        // These while conditions works to increase or decrease even further
        // the string tuning value, if needed.
        
        while (count < 0) {
            count = count + 12
        }

        while (count > 11) {
            count = count - 12
        }

        return count
    }

    /**
     * Return all strings note names.
     */
    getTuningNotes(
        options: TuningNotesMethodOptions = {
            asArray: false,
            transposed: false,
            forceSharp: false
        }
    ) {

        let EString = options.transposed ? this.ValidateTuning(0 + this.transposedTuning[0]) : this.ValidateTuning(0 + this.tuning[0]),
            AString = options.transposed ? this.ValidateTuning(5 + this.transposedTuning[1]) : this.ValidateTuning(5 + this.tuning[1]),
            DString = options.transposed ? this.ValidateTuning(10 + this.transposedTuning[2]) : this.ValidateTuning(10 + this.tuning[2]),
            GString = options.transposed ? this.ValidateTuning(3 + this.transposedTuning[3]) : this.ValidateTuning(3 + this.tuning[3]),
            BString = options.transposed ? this.ValidateTuning(7 + this.transposedTuning[4]) : this.ValidateTuning(7 + this.tuning[4]),
            eString = options.transposed ? this.ValidateTuning(0 + this.transposedTuning[5]) : this.ValidateTuning(0 + this.tuning[5])

        if (options.asArray) {
            return [this.notes[EString], this.notes[AString], this.notes[DString], this.notes[GString], this.notes[BString], this.notes[eString]]
        }

        return `${this.notes[EString]} ${this.notes[AString]} ${this.notes[DString]} ${this.notes[GString]} ${this.notes[BString]} ${this.notes[eString]}`
    }

    /**
     * Return the tuning name (or the strings' note names, if is an alternative tuning).
     */
    getTuningName(options: TuningNameMethodOptions = { transposed: false, forceSharp: false }) {

        // E Standard tuning logic:
        
        if (this.tuning[0] === this.tuning[1] && this.tuning[1] === this.tuning[2] && this.tuning[2] === this.tuning[3] && this.tuning[3] === this.tuning[4] && this.tuning[4] === this.tuning[5]) {


            // Checks if the transpose value is zero or a positive value,
            // so it'll use the sharp symbol on the tuning name. If not, it'll
            // use the flat symbol instead.
            
            if (this.transpose >= 0 || options.forceSharp) {
                return options.transposed ? `${this.notes[this.ValidateTuning(this.tuning[0] + this.transpose)]} Standard` : `${this.notes[this.ValidateTuning(this.tuning[0])]} Standard`
            }
            
            return options.transposed ? `${this.notesFlat[this.ValidateTuning(this.tuning[0] + this.transpose)]} Standard` : `${this.notes[this.ValidateTuning(this.tuning[0])]} Standard`

            
        }

        // Drop D tuning logic:

        if (this.tuning[0] === -2 && this.tuning[1] === this.tuning[2] && this.tuning[2] === this.tuning[3] && this.tuning[3] === this.tuning[4] && this.tuning[4] === this.tuning[5]) {

            if (this.transpose >= 0 || options.forceSharp) {
                return options.transposed ? `Drop ${this.notes[this.ValidateTuning(this.tuning[0] + this.transpose)]}` : `Drop ${this.notes[this.ValidateTuning(this.tuning[0])]}`
            }

            return options.transposed ? `Drop ${this.notesFlat[this.ValidateTuning(this.tuning[0] + this.transpose)]}` : `Drop ${this.notes[this.ValidateTuning(this.tuning[0])]}`

        }

        // If it's an alternative tuning, it'll return all note names as a string.

        return this.getTuningNotes()
    }
}