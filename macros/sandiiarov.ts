export function prepare(newMacro) {
    const macroExtensions = {
        cuser: newMacro().typeAlphanumeric("n780016"),
        cpass: newMacro()
            .withShift(newMacro().typeAlphanumeric("s"))
            .typeAlphanumeric("andiiarov")
            .withShift(newMacro().typeAlphanumeric("2"))
            .typeAlphanumeric("250885"),
    };

    return { macroExtensions };
}
