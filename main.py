import urwid
import requests


def question():
    return urwid.Pile([urwid.Edit(('I say', u"Give Url Path?\n"))])


def answer(response):
    return urwid.Text(('I say', '{}'.format(response)))


class ConversationListBox(urwid.ListBox):
    def __init__(self):
        body = urwid.SimpleFocusListWalker([question()])
        super(ConversationListBox, self).__init__(body)

    def keypress(self, size, key):
        key = super(ConversationListBox, self).keypress(size, key)
        if key != 'enter':
            return key
        name = self.focus[0].edit_text
        response = requests.get(name)
        if not name:
            raise urwid.ExitMainLoop()
        # replace or add response
        self.focus.contents[1:] = [(answer(response.status_code), self.focus.options())]
        pos = self.focus_position
        # add a new question
        self.body.insert(pos + 1, question())
        self.focus_position = pos + 1


palette = [('I say', 'default,bold', 'default'), ]
urwid.MainLoop(ConversationListBox(), palette).run()
