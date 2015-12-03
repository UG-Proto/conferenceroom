'''

    This file is part of Genee Conference Room scheduling application.

    Genee Conference Room is free software: you can redistribute it 
    and/or modify it under the terms of the GNU General Public License
    as published by the Free Software Foundation, either version 3 of
    the License, or (at your option) any later version.

    Genee Conference Room is distributed in the hope that it will be
    useful, but WITHOUT ANY WARRANTY; without even the implied warranty
    of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Genee Conference Room.  If not, see <http://www.gnu.org/licenses/>.
    Copyright 2014-2015 Genee, Inc.

'''

from google.appengine.ext import ndb

class Slot(ndb.Model):
  owner = ndb.StringProperty()
  room = ndb.StringProperty(default="4c")  # we have one room only for now
  date = ndb.DateProperty() 
  slot = ndb.IntegerProperty()

