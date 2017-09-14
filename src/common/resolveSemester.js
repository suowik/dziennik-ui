export function resolveSemester(group) {
    let activeYear = group.activeYear;
    let activeSemester = group.activeSemester;
    let found = group.semesters.filter(s => s.year === activeYear && s.semester === activeSemester);
    if(found.length === 1){
        return found[0];
    }
    throw new Error("wtf")
}