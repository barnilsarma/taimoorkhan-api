import express from "express";
import createJournal from "./src/controllers/journal/createJournal.js";
import createTitle from "./src/controllers/title/createTitle.js";
import readJournal from "./src/controllers/journal/readJournal.js";
import readTitle from "./src/controllers/title/readTitle.js";
import updateJournal from "./src/controllers/journal/updateJournal.js";
import deleteJournal from "./src/controllers/journal/deleteJournal.js";
import updateTitle from "./src/controllers/title/updateTitle.js";
import deleteTitle from "./src/controllers/title/deleteTitle.js";
import createConf from "./src/controllers/conferences/createConf.js";
import readConf from "./src/controllers/conferences/readConf.js";
import updateConf from "./src/controllers/conferences/updateConf.js";
import deleteConf from "./src/controllers/conferences/deleteConf.js";
import createPatents from "./src/controllers/patents/createPatents.js";
import readPatents from "./src/controllers/patents/readPatents.js";
import updatePatents from "./src/controllers/patents/updatePatents.js";
import deletePatents from "./src/controllers/patents/deletePatents.js";
import createBooks from "./src/controllers/books/createBooks.js";
import readBooks from "./src/controllers/books/readBooks.js";
import updateBooks from "./src/controllers/books/updateBooks.js";
import deleteBooks from "./src/controllers/books/deleteBooks.js";
import createChapter from "./src/controllers/bookChapters/createChapter.js";
import readChapter from "./src/controllers/bookChapters/readChapter.js";
import updateChapter from "./src/controllers/bookChapters/updateChapter.js";
import deleteChapter from "./src/controllers/bookChapters/deleteChapter.js";
import createProject from "./src/controllers/projects/createProject.js";
import readProject from "./src/controllers/projects/readProject.js";
import updateProject from "./src/controllers/projects/updateProject.js";
import deleteProject from "./src/controllers/projects/deleteProject.js";
import createThesis from "./src/controllers/thesis/createThesis.js";
import readThesis from "./src/controllers/thesis/readThesis.js";
import updateThesis from "./src/controllers/thesis/updateThesis.js";
import deleteThesis from "./src/controllers/thesis/deleteThesis.js";
import createIEEE from "./src/controllers/IEEE/createIEEE.js";
import readIEEE from "./src/controllers/IEEE/readIEEE.js";
import updateIEEE from "./src/controllers/IEEE/updateIEEE.js";
import deleteIEEE from "./src/controllers/IEEE/deleteIEEE.js";
import createGallery from "./src/controllers/gallery/createGallery.js";
import readGallery from "./src/controllers/gallery/readGallery.js";
import updateGallery from "./src/controllers/gallery/updateGallery.js";
import deleteGallery from "./src/controllers/gallery/deleteGallery.js";
import createEditorial from "./src/controllers/editorial/createEditorial.js";
import readEditorial from "./src/controllers/editorial/readEditorial.js";
import updateEditorial from "./src/controllers/editorial/updateEditorial.js";
import deleteEditorial from "./src/controllers/editorial/deleteEditorial.js";
import createMembership from "./src/controllers/memberships/createMembership.js";
import readMembership from "./src/controllers/memberships/readMembership.js";
import updateMembership from "./src/controllers/memberships/updateMembership.js";
import deleteMembership from "./src/controllers/memberships/deleteMembership.js";
import createSponsor from "./src/controllers/sponsored/createSponsor.js";
import readSponsor from "./src/controllers/sponsored/readSponsor.js";
import updateSponsor from "./src/controllers/sponsored/updateSponsor.js";
import deleteSponsor from "./src/controllers/sponsored/deleteSponsor.js";
import createAward from "./src/controllers/awards/createAward.js";
import readAward from "./src/controllers/awards/readAward.js";
import updateAward from "./src/controllers/awards/updateAward.js";
import deleteAward from "./src/controllers/awards/deleteAward.js";
import createTalk from "./src/controllers/talks/createTalk.js";
import readTalk from "./src/controllers/talks/readTalk.js";
import updateTalk from "./src/controllers/talks/updateTalk.js";
import deleteTalk from "./src/controllers/talks/deleteTalk.js";
import createCollab from "./src/controllers/collaborations/createCollab.js";
import readCollab from "./src/controllers/collaborations/readCollab.js";
import updateCollab from "./src/controllers/collaborations/updateCollab.js";
import deleteCollab from "./src/controllers/collaborations/deleteCollab.js";

const app = new express();
app.use(express.json());
//
app.post('/journal/add', createJournal);
app.get('/journal/read', readJournal);
app.put('/journal/update/:id', updateJournal);
app.put('/journal/delete/:id', deleteJournal);
//
app.post('/title/add', createTitle);
app.get('/title/read/:id', readTitle);
app.put('/title/update/:id', updateTitle);
app.put('/title/delete/:id', deleteTitle);
//
app.post('/conferences/add', createConf);
app.get('/conferences/read/:id', readConf);
app.put('/conferences/update/:id', updateConf);
app.put('/conferences/delete/:id', deleteConf);
//
app.post('/patents/add', createPatents);
app.get('/patents/read', readPatents);
app.put('/patents/update/:id', updatePatents);
app.put('/patents/delete/:id', deletePatents);
//
app.post('/books/add', createBooks);
app.get('/books/read', readBooks);
app.put('/books/update/:id', updateBooks);
app.put('/books/delete/:id', deleteBooks);
//
app.post('/chapters/add', createChapter);
app.get('/chapters/read', readChapter);
app.put('/chapters/update/:id', updateChapter);
app.put('/chapters/delete/:id', deleteChapter);
//
app.post('/projects/add', createProject);
app.get('/projects/read', readProject);
app.put('/projects/update/:id', updateProject);
app.put('/projects/delete/:id', deleteProject);
//
app.post('/thesis/add', createThesis);
app.get('/thesis/read', readThesis);
app.put('/thesis/update/:id', updateThesis);
app.put('/thesis/delete/:id', deleteThesis);
//  
app.post('/IEEE/add', createIEEE);
app.get('/IEEE/read', readIEEE);
app.put('/IEEE/update/:id', updateIEEE);
app.put('/IEEE/delete/:id', deleteIEEE);
//
app.post('/gallery/add', createGallery);
app.get('/gallery/read', readGallery);
app.put('/gallery/update/:id', updateGallery);
app.put('/gallery/delete/:id', deleteGallery);
//
app.post('/editorial/add', createEditorial);
app.get('/editorial/read', readEditorial);
app.put('/editorial/update/:id', updateEditorial);
app.put('/editorial/delete/:id', deleteEditorial);
//
app.post('/membership/add', createMembership);
app.get('/membership/read', readMembership);
app.put('/membership/update/:id', updateMembership);
app.put('/membership/delete/:id', deleteMembership);
//
app.post('/collab/add', createCollab);
app.get('/collab/read', readCollab);
app.put('/collab/update/:id', updateCollab);
app.put('/collab/delete/:id', deleteCollab);
//
app.post('/talk/add', createTalk);
app.get('/talk/read', readTalk);
app.put('/talk/update/:id', updateTalk);
app.put('/talk/delete/:id', deleteTalk);
//
app.post('/awards/add', createAward);
app.get('/awards/read', readAward);
app.put('/awards/update/:id', updateAward);
app.put('/awards/delete/:id', deleteAward);
//
app.post('/sponsored/add', createSponsor);
app.get('/sponsored/read', readSponsor);
app.put('/sponsored/update/:id', updateSponsor);
app.put('/sponsored/delete/:id', deleteSponsor);

app.listen(3000, () => {
    console.log("Server running at port 3000");
});