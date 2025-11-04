import ResumeEntry from '@/components/resumeEntry';
import entries from "../resumeEntries"

export default function Resume(){
    return(
    <main>
        <h1 className = "pagetitle">
            ₊✩‧₊˚Emma&apos;s Resume˚₊✩‧₊
        </h1>
        <section className = "resume">
            <h2 className = "section-title">
                Education
            </h2>
            <div>
                {entries.slice(0,1).map(entry => 
                    <ResumeEntry
                        entry_title = {entry.entry_title}
                        entry_info = {entry.entry_info}
                        entry_description = {entry.entry_description}
                        key = {1}
                    />
		        )}
            </div>
            <h2 className = "section-title">
                Coursework
            </h2>
               <div>
                {entries.slice(1,4).map(entry => 
                    <ResumeEntry
                        entry_title = {entry.entry_title}
                        entry_info = {entry.entry_info}
                        entry_description = {entry.entry_description}
                        key = {1}
                    />
		        )}
            </div>
            <h2 className = "section-title">
                Skills
            </h2>
               <div>
                {entries.slice(4,10).map(entry => 
                    <ResumeEntry
                        entry_title = {entry.entry_title}
                        entry_info = {entry.entry_info}
                        entry_description = {entry.entry_description}
                        key = {1}
                    />
		        )}
            </div>
            <h2 className = "section-title">
                Work Experience
            </h2>
             <div>
                {entries.slice(10,13).map(entry => 
                    <ResumeEntry
                        entry_title = {entry.entry_title}
                        entry_info = {entry.entry_info}
                        entry_description = {entry.entry_description}
                        key = {1}
                    />
		        )}
            </div>
            <h2 className = "section-title">
                Project Experience
            </h2>
               <div>
                {entries.slice(13,14).map(entry => 
                    <ResumeEntry
                        entry_title = {entry.entry_title}
                        entry_info = {entry.entry_info}
                        entry_description = {entry.entry_description}
                        key = {1}
                    />
		        )}
            </div>
        </section>
    </main>
    )
}